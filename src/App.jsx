import { useState } from 'react';
import './App.css';
import { useGetAllPostQuery, useGetPostIdQuery, useGetPostByLimitQuery } from "./services/Post.js";

function App() {
  // const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostIdQuery(15);
  const responseInfo = useGetPostByLimitQuery(5)

  console.log("Response Information :", responseInfo);

  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
  return (
    <>
      {/* //Get All Data */}
      {/* <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    {
      responseInfo.data.map((post, i) =>
      <div key={i}>
        <h2>{post.id}: {post.title}</h2>
        <p>{post.body}</p>
        <hr />
      </div>
      )
    } */}

      {/* Get Single Data  */}
      {/* <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
      <div>
        <h2>{responseInfo.data.id}: {responseInfo.data.title}</h2>
        <p>{responseInfo.data.body}</p>
        <hr />
      </div> */}
      {/* Get Limited Data  */}
      <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
      {
        responseInfo.data.map((post, i) =>
          <div key={i}>
            <h2>{post.id}: {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )
      }
    </>
  )
}

export default App
