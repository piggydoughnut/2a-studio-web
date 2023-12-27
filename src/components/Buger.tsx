"use client";

import { useEffect, useRef, useState } from "react";

import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logov2-1.svg";
import { useRouter } from "next/navigation";

const Burger = ({ menu }: { menu: Array<{ name: string; url: string }> }) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [listeningEnabled, setListeningEnabled] = useState(false);
  const [listening, setListening] = useState(false);

  const c =
    "bg-white w-full h-full pt-24 pb-12 ease-linear transition absolute overflow-hidden";
  const classStyle = isOpen
    ? " translate-x-0 " + c
    : c + " translate-x-[-100%] ";

  useEffect(() => {
    if (!listeningEnabled) return;
    if (listening) return;
    if (!menuRef.current) return;
    let funcs: Array<any> = [];

    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      const listener = document.addEventListener(`click`, (evt) => {
        if (!menuRef.current) {
          return;
        }
        if (
          (menuRef.current && menuRef.current.contains(evt.target as Node)) ||
          // @ts-ignore
          evt.target?.className === "hamburger-react"
        )
          return;
        setIsOpen(false);
        setListeningEnabled(false);
      });
      funcs.push(listener);
    });
    return () => {
      funcs.map((f) => document.removeEventListener("click", f));
    };
  }, [listeningEnabled, listening]);

  return (
    <div className="flex flex-row justify-end z-50">
      <div className="flex flex-row pr-6 z-10">
        <Hamburger
          // @ts-ignore
          className="hamburger-react"
          toggled={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
            setListeningEnabled(!isOpen);
          }}
          color="#151313"
        />
      </div>
      <div className={classStyle} ref={menuRef}>
        <div className="pl-12 flex flex-col align-start gap-8 justify-start">
          {menu.map((item: any) => (
            <div
              key={item.name}
              className="text-xl uppercase cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setListeningEnabled(false);
                router.push(item.url);
              }}
            >
              {item.name}
            </div>
          ))}
          <Link className="font-bold" href="/">
            2a design studio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Burger;
