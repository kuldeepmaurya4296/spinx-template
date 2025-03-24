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
import navbarSchema from "./navbarSchema";
import postType from "./postType";

export const schema = {
  types: [postType, navbarSchema, heroSection, awards, project, whatweare, highlightSection, brands, logos, experties, awardsRecognition, awardSection, processSteps, stepsNavigation, contact, testimonial, insights, devine],
}
