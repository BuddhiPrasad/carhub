"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButto = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => 
 

    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>

  </button>
 
   

export default CustomButto;