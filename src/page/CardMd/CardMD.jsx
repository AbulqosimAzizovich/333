import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import searchApi from "../../service/search";

const CardMD = (alpha) => {
  const [data, setData] = useState([]);
  const { alpha3Code } = useParams();

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    searchApi
      .getOneCountry(alpha3Code)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Error!");
      });
  }, []);
console.log(data);

  return (
    <>
      <div className="mt-20">
        <div className="container mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="py-[10px] px-8 bg-slate-100 rounded-[6px] shadow-[0px,0px,7px,0px,rgba(0,0,0,0.29)] active:border-[#000] active:border-[1px]"
          >
            <div className="flex text-[16px] font-light items-center  gap-x-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                  fill="#111517"
                />
              </svg>
              <p>Back</p>
            </div>
          </button>

          <div className="mt-20 flex item-center gap-x-[120px]">
            <img
              src={data[0]?.flags.svg}
              className="w-[559px] h-[405px]"
              alt={data[0]?.name}
            />
            <div>
              <h1 className="text-[32px] mt-[30px] font-extrabold mb-6">
                {data[0]?.name}
              </h1>

              <div className="flex items-start gap-x-[141px]">
                <div>
                  <p className="mb-[10px]">
                    <strong>Native Name: </strong> {data[0]?.nativeName}
                  </p>
                  <p className="mb-[10px]">
                    <strong>Population: </strong> {data[0]?.population}
                  </p>
                  <p className="mb-[10px]">
                    <strong>Region: </strong> {data[0]?.region}
                  </p>
                  <p className="mb-[10px]">
                    <strong>Sub region: </strong> {data[0]?.subregion}
                  </p>
                  <p className="mb-[10px]">
                    <strong>Capital: </strong> {data[0]?.capital}
                  </p>
                </div>
                <div>
                  <p className="mb-[10px]">
                    <strong>Top Level Domain: </strong>{" "}
                    {data[0]?.topLevelDomain}
                  </p>
                  <p className="mb-[10px]">
                    <strong>Currencies: </strong> {data[0]?.currencies[0]?.code}
                  </p>
                  <p className="mb-[10px]">
                    <strong>Languages: </strong> {data[0]?.languages.map((e) => {return e?.name + ' '})}
                  </p>
                </div>
              </div>

              <p className="mt-[70px]">
                <strong>Border Countries: </strong> {data[0]?.borders.map((e) => {
                    return e + ', '
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMD;
