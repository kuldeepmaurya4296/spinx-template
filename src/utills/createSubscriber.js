import client from "@/sanity/lib/client";

export const createSubscriber = async (email) => {
    try {
      if (!email) {
        throw new Error("Email is required.");
      }
  
      // Check if the subscriber already exists
      const existingSubscriber = await client.fetch(
        `*[_type == "subscriber" && email == $email][0]`,
        { email }
      );
  
      if (existingSubscriber) {
        throw new Error("You are already subscribed! 🎉");
      }
  
      // Create a new subscriber
      const newSubscriber = await client.create({
        _type: "subscriber",
        email,
        subscribedAt: new Date().toISOString(),
      });
  
      return newSubscriber;
    } catch (error) {
      throw new Error(error.message);
    }
  };