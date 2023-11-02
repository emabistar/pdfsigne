
import clsx, { ClassValue } from "clsx";
import { Twinkle_Star } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
  return  twMerge(clsx(inputs))
}