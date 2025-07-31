import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

/**
 * Card with icon and text 
 * @param logo?: string | null. If null, the img will be used instead.
 * @param linkto: string
 * @param title: string
 * @param subtitle: string
 * @param img?: string | null. If null, the icon will be used instead.
*/

export function ContactCard({
    logo,
    linkto,
    title,
    subtitle,
    img,
}: {
    logo?: string | null;
    linkto: string;
    title: string;
    subtitle: string;
    img?: string | null;
}) {
  return (
    <>
        {/* Mobile: Just Icons */}

        <a 
        href={linkto} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group md:hidden hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
            {img ? 
                <Image src={img} alt={title} width={48} height={48} className="w-12 h-12" />
            :
                <i className={`${logo} text-5xl`}></i>
            }
        </a>


        {/* Desktop: Full Cards */}

        <a 
        href={linkto} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group hidden md:block"
        >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 hover:bg-white/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center -mb-4">
                <div className="flex justify-center mb-2">
                    {img ? 
                        <Image src={img} alt={title} width={36} height={36} className="w-9 h-9" />
                    :
                        <i className={`${logo} text-4xl`}></i>
                    }
                </div>
                <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">{subtitle}</p>
                </CardContent>
            </Card>
        </a>

    </>
  )
}