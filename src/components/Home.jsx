import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loader";
import Cards from "./Cards";
import { toast } from "react-toastify";
import pic from "../assets/startwars.png"; 
const Home = () => {
  const [peopleList, SetList] = useState();
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const getList = async () => {
    setLoading(true);
    const data = await (await axios.get("https://swapi.dev/api/people")).data;
    SetList(data);
    setLoading(false);
  };
  useEffect(() => {
    getList();
    console.log(peopleList);
    setLoading(false);
  }, []);

  useEffect(() => {
    const id = setTimeout(async () => {
      if (search == "") {
        getList();
      } else {
        setLoading(true);
        const data = await (
          await axios.get(`https://swapi.dev/api/people/?search=${search}`)
        ).data;
        SetList(data);
        setLoading(false);
      }
    }, 1200);

    return () => {
      clearTimeout(id);
    };
  }, [search]);

  const handleNext = async () => {
    if (peopleList?.next) {
      setLoading(true);
      const data = await (await axios.get(peopleList?.next)).data;
      console.log(data.next);
      SetList(data);
      setLoading(false);
    } else {
      toast.error("No more");
    }
  };
  const handleprev = async () => {
    if (peopleList?.previous) {
      setLoading(true);
      const data = await (await axios.get(peopleList?.previous)).data;
      SetList(data);
      setLoading(false);
    } else {
      toast.error("No more");
    }
  };
  const handleSort = (event) => {
    setSelectedValue(event.target.value);
    let temparr = peopleList?.results;
    let sortarr = temparr.sort((a, b) => {
      if (parseInt(a[event.target.value]) > parseInt(b[event.target.value])) {
        return -1;
      } else if (parseInt(a[event.target.value]) < parseInt(b[event.target.value])) {
        return 1;
      }
    });
    console.log(sortarr);
    SetList({ ...peopleList, results: sortarr });
  };

  return (
    <div className="bg-[#242424] bg-right bg-no-repeat bg-cover shadow-lg font-[Titillium]" style={{backgroundImage:`url(${pic})`}}>
      <div className="flex flex-row gap-4 justify-end">
        <span className="text-white text-lg">Search Character</span>
        <input
          className="inline-flex shadow appearance-none border rounded  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div className="w-[60%] flex flex-row gap-3">
        <table class="w-full text-left text-sm font-light text-white ml-4">
          <thead class="border-b font-medium dark:border-neutral-100">
            <tr>
              <th scope="col" class="px-6 py-4">
                Name
              </th>
              <th scope="col" class="px-6 py-4">
                Gender
              </th>
              <th scope="col" class="px-6 py-4">
                Mass
              </th>
              <th scope="col" class="px-6 py-4">
                Height
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <Loading />}
            {!isLoading &&
              peopleList?.results.map((val, ind) => {
                return (
                  <Cards
                    key={ind}
                    name={val.name}
                    gender={val.gender}
                    mass={val.mass}
                    height={val.height}
                  />
                );
              })}
          </tbody>
        </table>
        <select
          id="countries"
          class="bg-white rounded-lg text-black border-white border-3 px-3 py-1  h-fit"
          value={selectedValue}
          onChange={handleSort}
        >
          <option selected value={null}>
            {" "}
            Sort by
          </option>
          <option value="height">Height</option>
          <option value="mass">Mass</option>
        </select>
      </div>

      <div className="flex  flex-row gap-4 justify-end mt-2">
        <button
          onClick={handleprev}
          className="bg-white rounded-lg text-black border-white border-3 px-3 py-1"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-white rounded-lg text-black border-white border-3 px-3 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
