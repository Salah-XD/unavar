import React from "react";
import Image from "next/image";

const Aboutcard = () => {
    return(
        <div>
            <div className="mx-auto rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
                <div className="mt-1 text-sm">
                    Deva V, a certified ISO 22000:2018 Auditor, Hygiene Rating auditor
                    and a certified Food analyst and Food microbiologist with a post
                    graduate degree in Food and Nutrition Biotechnology. Have 3 years
                    of experience in certification process as well as catering and FMCG
                    industries with more than 200 consultation audits under the FSSAI
                    initiatives and 100 consultation audits in ISO 22000:2018 standards
                    and Hygiene monitoring documentation.
                </div>
            <div>
                <div className="mx-auto w-full border border-gray-300 my-2"></div>
                    <div className="flex items-center">
                        <div>
                            <Image
                                src="/images/merlin.png"
                                alt="img"
                                className="rounded-full"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="ml-2">
                            <div className="font-bold">Deva V</div>
                            <div className="text-sm text-gray-600 mt-1"><a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Business Development Manager/ Subject Matter Expert</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutcard;