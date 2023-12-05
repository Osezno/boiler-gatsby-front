
const title= "Lorem Ipsum"
const date= "10/11/2023"
const lastUpdated= "10/12/2023"
const description= "Lorem ipsum dolor amet, loremipsum dolor amet"
const id= "1"

export const userSongsDummy = [
    {title, date, lastUpdated, description, id},
     {title, date, lastUpdated, description, id:"2"},
     {title, date, lastUpdated, description, id:"3"},
     {title, date, lastUpdated, description, id:"4"},
     {title, date, lastUpdated, description, id:"5"},
     {title, date, lastUpdated, description, id},
     {title, date, lastUpdated, description, id},
     {title, date, lastUpdated, description, id}
];

export type SongsProps = {
    title: string
    date: string
    lastUpdated: string
    description: string
    id:string
  } 
