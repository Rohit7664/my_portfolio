import React from 'react'

const Mywork = () => {
  return (
    <div className="svg-background">
      <div className="md:px-48 md:py-96 py-16">
        <div className="flex md:flex-col px-12">
          <div className="">
            <div className="md:text-8xl text-6xl font-bold leading-normal ">
              A developer passionate about creating
              <span className="gradient-text">{" beautiful"}</span> user
              friendly products
            </div>
          </div>
        </div>
        <div className="flex px-12 md:py-12 py-8">
          <button className="mb-2 md:mb-0 bg-black px-5 py-2 shadow-sm tracking-wider border text-white rounded-full hover:bg-gray-100 hover:text-black inline-flex items-center space-x-2 ">
            Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mywork