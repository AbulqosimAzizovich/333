import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";
import searchApi from "../../service/search";
import { Link } from "react-router-dom";

const index = () => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [inpVal, setInpVal] = useState("");

  const regions = [];

  useEffect(() => {
    searchApi
      .getCountry()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Error!");
      });
  }, []);

  data.map((e) => {
    regions.push(e.region);
  });

  let filter = [...new Set(regions)];
  filter.sort();

  const searchCountries = (e) => {
    setInpVal(e);

    {
      e !== ""
        ? searchApi
            .searchCountry(e)
            .then((response) => {
              setFilteredData(response.data);
              setData(filteredData);
            })
            .catch((err) => {
              console.log(err);
              setErrorMsg("Error!");
            })
        : location.reload();
      useEffect(() => {
        searchApi
          .getCountry()
          .then((response) => {
            setData(response.data);
          })
          .catch((err) => {
            console.log(err);
            setErrorMsg("Error!");
          });
      }, []);
    }
  };

  return (
    <main>
      <section>
        <main>
          <section id="filters" className="my-12">
            <div className="container mx-auto px-5">
              <div className="flex items-start  md:justify-between  md:items-center flex-col md:flex-row">
                <input
                  id="search"
                  type="search"
                  onChange={(e) => searchCountries(e.target.value)}
                  placeholder="Search for a country…"
                  className=" shadow dark:bg-[#2B3844] dark:text-white h-[56px] rounded-[5px]  outline-none mb-[40px] md:mb-0 w-full md:w-[480px] p-[18px]"
                />

                <select
                  id="region"
                  className="h-[56px] w-[200px] px-[24px] py-[18px] dark:bg-[#2B3844]  dark:text-white"
                  onChange={() =>
                    filter.map((e) => {
                      <option>{e}</option>;
                    })
                  }
                >
                  <option disabled selected>
                    Filter by Region
                  </option>
                </select>
              </div>
            </div>
          </section>

          <section id="countries">
            <div className="container mx-auto px-5">
              <div id="wrapper" className="grid justify-items-center ">
                {data.length ? (
                  <ul className="flex flex-wrap gap-x-12">
                    {data.map((e) => {
                      return (
                        <>
                          <Link to={`/name/${e.alpha3Code}`}>
                            <Card
                              flag={e.flags.png}
                              name={e.name}
                              population={e.population}
                              region={e.region}
                              capital={e.capital}
                            />
                          </Link>
                        </>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        </main>
      </section>
    </main>
  );
};

export default index;
