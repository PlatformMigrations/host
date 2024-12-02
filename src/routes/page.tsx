import * as React from "react"


import Basic from "federation_provider/basic"
import CardTask from "federation_provider/card-task"
import SortList from "federation_provider/sort-list"

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-2 gap-y-11">
      <div className="col-span-2">
        <h2 className="text-4xl">My Spots</h2>
      </div>
      <div className="bg-zinc-100/70 rounded-3xl p-3 col-span-2">
        <div className="rounded-2xl bg-white p-2 px-3 ">
          <Basic />
          <CardTask />
          <SortList/>
        </div>
      </div>

      <div className="bg-zinc-100/70 rounded-3xl p-3"></div>
    </div>
  )
}
