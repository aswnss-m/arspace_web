import {ads, diamond, mask} from '@/app/svgs'
const hero = {
    name: "AR Space",
    catch_line: "Unleash Your   Creativity with our no code tool, easy-to-use tool"
  }
const about = "ArSpace is a cutting-edge platform that empowers artists and creators to transform the world around them with Augmented Reality. Whether you're an aspiring artist, a business looking to advertise in innovative ways, or simply want to participate in exciting treasure hunts, ArSpace is the canvas for your imagination. Our user-friendly no-code tool makes AR content creation accessible to everyone."

const use_case = [
    {
      name: "Advertisement",
      description: "ArSpace provides a unique advertising platform that lets businesses share their products and messages with a global audience using AR. Engage your customers in a whole new way and leave a lasting impression.",
      key_points: [
        "Engage a global audience",
        "Create interactive ad campaigns",
        "Enhance brand visibility"
      ],
      img: ads
    },
    {
      name: "Exhibition",
      description: "ArSpace turns the world into an open-air gallery. Artists can use our platform to exhibit their work in diverse locations, offering a new dimension to art appreciation.",
      key_points: [
        "Showcase art in unique settings",
        "Connect with art enthusiasts",
        "Expand your artistic reach"
      ],
      img: mask
    },
    {
      name: "Events / Campaigns",
      description: "Join us for interactive virtual events and engaging seminars. Connect with experts, explore diverse topics, and expand your network—your gateway to insightful experiences and meaningful connections.",
      key_points: [
        "Attend create events and brand campaigns and win prizes",
        "Discover new events and campaigns",
        "Challenge and entertain others"
      ],
      img: diamond
    }]

export {
    hero,
    about,
    use_case
}