
import React from 'react'
import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"
import DrawerComp from './components/drawer-comp'
import CardComponent from './components/card-comp'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { title } from 'process'


export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
  }
export async function getTasks() {
    const data = await fs.readFile(
      path.join(process.cwd(), "app\\tasks\\data\\tasks.json")
    )
  
    const tasks = JSON.parse(data.toString())
  
    return z.array(taskSchema).parse(tasks)
  }

  export default async function TaskPage() {
    const tasks = await getTasks()
 
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
      <div className='flex justify-center'>
      <DrawerComp className='flex justify-center'></DrawerComp>
      </div>
      <div className='flex justify-center'>
      <div className='m-10 p-10 justify-between'>
        {/*<CardComponent /> */}
        { tasks.slice(0, 4).map((task, index) => (
        <CardSpotlight className="h-96 my-7 w-3/4 items-center justify-center">
        <div key={task.id} className='text-gray-400'>
        <p  className="text-xl font-bold relative z-20 mt-2 ">
          Title: {task.title}
        </p>
        <p className="text-xl font-bold relative z-20 mt-2 ">
          Assigned To: {task.assignment}
        </p>
        <p className="text-xl font-bold relative z-20 mt-2 ">
          Status : {task.status}
        </p>
        <p className="text-xl font-bold relative z-20 mt-2 ">
          Priority : {task.priority}
        </p>
        </div>
        </CardSpotlight>
        ))}
      </div>
      </div>
    </>
  )
}
