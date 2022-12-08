import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ListaPerrito() {
  const [dogs, setDogs] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }

    setSearched(false)
    fetchDogData()
  }, [])

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      )
      const data = await res.json()
      setDogs(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchForDog()
    setSearched(true)
  }

  return (
    <>
      {!dogs ? (
        <h1 className="">
          Loading...
        </h1>
      ) : (
        <>
          <section className="">
            <div className="text-center">
              <h1 className="">
                Huellitas por el mundo
              </h1>
              <form
                onSubmit={handleSubmit}
                className=""
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a dog / breed"
                  className=""
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>

            <div className="">
              {!searched ? (
                dogs.map((dog) => (
                  <Link
                    to={`/${dog.name}`}
                    key={dog.id}
                    className=""
                  >
                    <article>
                      <img
                        src={dog.image.url}
                        alt={dog.name}
                        loading="lazy"
                        className=""
                      />
                      <h3 className="">
                        {dog.name}
                      </h3>
                      <p className="">Bred For: {dog.bred_for}</p>
                    </article>
                  </Link>
                ))
              ) : (
                <>
                  {dogs.map((dog) => (
                    <Link
                      to={`/${dog.name}`}
                      key={dog.id}
                      className=""
                    >
                      <article>
                        <img
                          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                          alt={dog.name}
                          className=""
                        />
                        <h3 className="">
                          {dog.name}
                        </h3>
                        <p className="">
                          Bred For: {dog.bred_for}
                        </p>
                      </article>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  )
}
