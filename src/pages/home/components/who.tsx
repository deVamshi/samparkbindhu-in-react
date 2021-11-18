import React from 'react'
import "./who.css";
import WhoElement from "./whoelement";
import Title from "../../../components/title";
export default function Who() {
  return (
    <div className="who" id="whoWeAre">
      <Title title="Who We Are" />
      <div className="who-elements">
        <WhoElement
          imgSrc={"./Vector.png"}
          title="VISION"
          text="Empower everyone to collaborate and be an integral part of their success journey"
        />
        <WhoElement
          imgSrc={"./mission.png"}
          title="MISSION"
          text="To be the best technological product provider across genres that would enable people to do things better and be successful."
        />
        <WhoElement
          imgSrc={"./values.png"}
          title="VALUES"
          text='Our Corporate Purpose states that to succeed requires "the highest standards of corporate behaviour towards everyone we work with and the communities we touch"'
        />
      </div>
      <div className="who-text">
        <strong>Valuing relationships</strong> that we build during course of
        business Doing business with <strong>integrity</strong> is at the heart
        of our business and commitments We believe that people can deliver more
        in
        <strong> collaboration</strong>. <strong>Pioneering</strong> and
        remaining a step ahead of competition is always our endeavour We are
        committed to make <strong>continuous improvement</strong> in whatever we
        do to add value to the business and ourselves <strong>People</strong>{" "}
        are integral part of our journey and we value them for what they bring
        on the table every day.
      </div>
    </div>
  );
}
