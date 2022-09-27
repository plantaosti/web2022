import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full bg-gray-200 min-h-[300px]">
      <div className="flex gap-4 items-center p-6 w-[980px] bg-orange-200 m-auto justify-between">
        <div className="flex">
          <Link href="/" title="Plantão STI">
            <a className="flex flex-row gap-2 items-center">
              <Logo /> <span>Plantao STI</span>
            </a>
          </Link>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Site</h4>
          <ul>
            <li>Platão</li>
            <li>Plantões</li>
            <li>Farmácias</li>
            <li>Produtos</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Mais Informações</h4>
          <ul>
            <li>Platão</li>
            <li>Plantões</li>
            <li>Farmácias</li>
            <li>Produtos</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
