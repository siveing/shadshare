"use client";

import LoadingScreen from "@/components/shared/Loading/loading";
import PinkIntro from "@/components/shared/Pink/PinkIntro";
import { useAppSelector } from "@/contexts/hook";
import { loadingSelector } from "@/contexts/loading/loading.slice";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import React from "react";

function RootComponent({ children }: { children: React.ReactNode }) {
    /**
     * Can i use the state of redux toolkit here?
     * Let see
     */
    const { isLoading } = useAppSelector(loadingSelector);

    return (
        <>
            <PinkIntro type='introGif' className='hidden 2xl:block top-5 right-5' width={200} />
            <PinkIntro type='intro' className='hidden 2xl:block bottom-5 left-5' width={150} height={300} />
            {isLoading && (
                <LoadingScreen />
            )}
            {children}
        </>
    );
}

export default RootComponent;