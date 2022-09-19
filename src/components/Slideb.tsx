import { GetServerSideProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { format } from "date-fns";
import { useGetFarmaciasQuery } from "../graphql/generated";

export function Slideb() {
  const { data, loading } = useGetFarmaciasQuery();
  console.log(data);
  if (loading) {
    return (
      <div className="flex flex-col items-center p-6 mt-9">
        <div className="flex flex-col items-center gap-3">
          <i className="ri-loader-2-fill animate-spin text-green-600 text-4xl"></i>
          <p className="animate-pulse text-sm text-green-600 font-bold">
            Loading ...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center p-6 mt-9">
      <div className="flex flex-col items-center gap-3">
        <i className="ri-loader-2-fill animate-spin text-green-600 text-4xl"></i>
        <p className="animate-pulse text-sm text-green-600 font-bold">
          Carregado ...
        </p>
      </div>
    </div>
  );
}
