import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-black/90 min-h-screen py-10 ">
      <div className="font-Kanit space-y-4 text-white py-6 ">
        <h1 className="font-bold text-center text-4xl">
          <span className="text-transparent font-Kanit text-6xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            CodeWords - Your Platform for Coding Narratives
          </span>
        </h1>
        <p className="px-40 text-2xl">
          Welcome to CodeWords, the premier destination for passionate coders,
          developers, and tech enthusiasts to share their insights, experiences,
          and journeys in the vast world of programming. Our blogging web app is
          designed to be your digital canvas, where you can craft and share
          stories, tutorials, and reflections on all things coding.
        </p>
      </div>
      <div className="font-Kanit space-y-4 text-white py-6 ">
        <h1 className="font-bold text-center text-4xl">
          <span className="text-transparent font-Kanit text-6xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            Empowering the Coding Community
          </span>
        </h1>
        <p className="px-40 text-2xl">
          At CodeWords, we believe in the power of storytelling to inspire,
          educate, and connect. Our mission is to empower the coding community
          by providing a platform where individuals can articulate their coding
          adventures, share technical expertise, and foster a sense of
          camaraderie among fellow developers.
        </p>
      </div>
      <div className="font-Kanit space-y-4 text-white py-6 ">
        <h1 className="font-bold text-center text-4xl">
          <span className="text-transparent font-Kanit text-6xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            What Set's Us Apart
          </span>
        </h1>
        <ul className="px-40 text-2xl list-disc">
          <li className="space-y-2">
            <h3 className="underline underline-offset-8">Diverse Content</h3>
            <p className="text-2xl">
              Whether you're a seasoned developer sharing your company's
              innovative practices, a coding beginner narrating your learning
              journey, or an enthusiast exploring the latest technologies,
              CodeWords welcomes a diverse
            </p>
          </li>
          <li className="space-y-2">
            <h3 className="underline underline-offset-8">Engaging Blogs</h3>
            <p className="text-2xl">
              Our user-friendly interface makes it easy for you to compose
              engaging blogs. Utilize rich text editing, embed code snippets,
              and add multimedia elements to bring your narratives to life
            </p>
          </li>
        </ul>
      </div>
      <div className="font-Kanit space-y-4 text-white py-6 ">
        <h1 className="font-bold text-center text-4xl">
          <span className="text-transparent font-Kanit text-6xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            What You Can Do on CodeWords:
          </span>
        </h1>
        <ul className="px-40 text-2xl list-disc">
          <li className="space-y-2">
            <h3 className="underline underline-offset-8">
              Share Coding Experiences
            </h3>
            <p className="text-2xl">
              Reflect on your coding triumphs, challenges, and eureka moments.
              Whether it's conquering a complex algorithm or overcoming a
              project hurdle, your experiences matter
            </p>
          </li>
          <li className="space-y-2">
            <h3 className="underline underline-offset-8">Company Chronicles</h3>
            <p className="text-2xl">
              Spotlight your company's technological achievements, innovation
              strategies, and the unique coding culture that sets it apart.
              Showcasing your company's journey contributes to the collective
              wisdom of the coding community.
            </p>
          </li>
          <li className="space-y-2">
            <h3 className="underline underline-offset-8">Learning Journeys</h3>
            <p className="text-2xl">
              Inspire beginners by chronicling your learning journey. Share
              resources, tips, and the lessons you've learned along the way.
              Your journey may be the beacon that guides someone on their coding
              path.
            </p>
          </li>
          <li className="space-y-2">
            <h3 className="underline underline-offset-8">
              Tech Trends and Insights
            </h3>
            <p className="text-2xl">
              Stay at the forefront of the tech landscape by sharing insights
              into emerging technologies, industry trends, and best practices.
              Contribute to the collective knowledge base of the coding
              community.
            </p>
          </li>
        </ul>
      </div>
      <div className="font-Kanit space-y-4 text-white py-6  ">
        <h1 className="font-bold text-center text-4xl">
          <span className="text-transparent font-Kanit text-6xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            Join CodeWords Today!
          </span>
        </h1>
        <p className="px-40 text-2xl">
          Whether you're a coding veteran, a coding newbie, or somewhere in
          between, CodeWords is your canvas to paint the vibrant picture of your
          coding experiences. Join our community, unleash your creativity, and
          be part of a platform that celebrates the diverse narratives within
          the coding world. Start your coding chronicle today! Together, let's
          weave the tapestry of the coding community at CodeWords.
        </p>
      </div>
      <div className="w-1/6 mx-auto flex">
        <Link
          to="/signup"
          className="my-2 px-12 font-bold font-Kanit hover:scale-110 transition-all text-white bg-yellow-500 py-2 "
        >
          JOIN NOW
        </Link>
      </div>
    </section>
  );
};

export default About;
