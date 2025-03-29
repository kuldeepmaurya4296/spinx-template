import ceomessage from "./ceomessage";
import createConsult from "./createConsult";
import expertiseData from "./experties/expertiseData";
import expertiseHero from "./experties/expertiseHero";
import footer from "./footer";
import awards from "./homepage/awards";
import awardSection from "./homepage/awardSection";
import awardsRecognition from "./homepage/awardsRecognition";
import brands from "./homepage/brands";
import contact from "./homepage/contact";
import devine from "./homepage/devine";
import experties from "./homepage/experties";
import heroSection from "./homepage/heroSection";
import highlightSection from "./homepage/highlightSection";
import insights from "./homepage/insights";
import logos from "./homepage/logos";
import processSteps from "./homepage/processSteps";
import project from "./homepage/project";
import stepsNavigation from "./homepage/stepsNavigation";
import testimonial from "./homepage/testimonial";
import whatweare from "./homepage/whatweare";
import individualWork from "./individualWork";
import jobPost from "./job";
import jobApplication from "./jobApplication";
import navbarSchema from "./navbarSchema";
import postType from "./postType";
import subscriber from "./subscriber";
import userSchema from "./userSchema";

export const schema = {
  types: [postType, navbarSchema, heroSection, awards, whatweare, highlightSection, brands, logos, experties, awardsRecognition, awardSection, processSteps, stepsNavigation, contact, testimonial, insights, devine, individualWork, expertiseHero, expertiseData, ceomessage, jobPost, jobApplication, userSchema, subscriber, createConsult, footer],
}
