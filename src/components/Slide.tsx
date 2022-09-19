import Link from "next/link";
import ptBR from "date-fns/locale/pt-BR";
import { format, parseISO } from "date-fns";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetPlantoesStartEndQuery } from "../graphql/generated";
import Image from "next/image";

export function Slide() {
  const end = format(Date.now(), "yyyy-MM-d'T'12:00:00+00:00");
  const { data, loading } = useGetPlantoesStartEndQuery({
    variables: {
      end,
    },
  });
  if (loading) {
    return (
      <div className="flex flex-col items-center p-6 mt-9">
        <div className="flex flex-col items-center gap-3">
          <i className="ri-loader-2-fill animate-spin text-green-600"></i>
          <p className="animate-pulse text-sm text-green-600 font-bold">
            Carregando ...
          </p>
        </div>
      </div>
    );
  }
  return (
    <section className="w-full flex-col bg-gray-100 dark:bg-gray-300 mt-9 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[980px] m-auto">
        <Swiper
          className="w-[calc(100vw - 12rem)] md:w-[600px] px-10 my-6 mx-4 md:order-2 drop-shadow-xl flex flex-1"
          effect={"coverflow"}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          pagination={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {data?.plantoes.map((plantao) => {
            return (
              <SwiperSlide key={plantao.id} className="">
                <Image
                  className="rounded-t-lg"
                  width={720}
                  height={470}
                  src={`/images/${plantao.farmacias?.urllogo}`}
                  alt={`Foto farmácia ${plantao.farmacias?.name}`}
                />

                <div className="bg-white p-4 rounded-b-lg">
                  <h3 className="text-gray-400 text-lg mb-3 md:text-xl lg:text-2xl font-bold">
                    {plantao.farmacias?.name}
                  </h3>
                  <div className="">
                    <p className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                      {plantao.farmacias?.neighborhood} |{" "}
                      {plantao.farmacias?.street}
                    </p>
                    <p className="text-sm text-gray-500 flex gap-2 items-center mb-3">
                      <i className="ri-phone-fill"></i>
                      {plantao.farmacias?.phone}
                    </p>
                    <div className="flex justify-between ">
                      <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                        <i className="ri-calendar-event-fill text-green-100"></i>
                        {format(parseISO(plantao.datetimestart), "dd/MM/yy", {
                          locale: ptBR,
                        })}
                      </span>
                      <span className="text-sm text-gray-500 flex gap-2 items-center p-1">
                        <i className="ri-calendar-event-fill text-red-500"></i>
                        {format(parseISO(plantao.datetimeend), "dd/MM/yy", {
                          locale: ptBR,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-button-prev text-white after:content-[''] after:text-sm"></div>
          <div className="swiper-button-next text-white after:content-[''] after:text-sm"></div>
        </Swiper>
        <div className="p-6 flex flex-col gap-5 justify-center align-middle order-1 md:max-w-sm lg:max-w-md">
          <h3 className="text-xl lg:text-5xl font-bold text-gray-400 dark:text-gray-100">
            Farmácia de Plantão
          </h3>
          <p className="text-sm text-gray-400 lg:text-lg dark:text-gray-50">
            Confira a lista atualizada dos plantões para este mês.
          </p>
          <Link href="/plantoes">
            <a className="bg-green-600 p-4 max-w-[200px] flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400">
              Lista completa
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
