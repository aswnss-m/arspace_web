import {ads, diamond, mask} from '@/app/svgs'
const basic ={
  app : 'AR.Social'
}
const hero = {
    name: basic.social,
    catch_line: `Unleash Your Creativity with our no code tool, easy-to-use tool`
  }
const about = `${basic.app} is a cutting-edge platform that empowers artists and creators to transform the world around them with Augmented Reality. Whether you're an aspiring artist, a business looking to advertise in innovative ways, or simply want to participate in exciting treasure hunts, ${basic.app} is the canvas for your imagination. Our user-friendly no-code tool makes AR content creation accessible to everyone.`

const use_case = [
    {
      name: `Advertisement`,
      description: `${basic.app} provides a unique advertising platform that lets businesses share their products and messages with a global audience using AR. Engage your customers in a whole new way and leave a lasting impression.`,
      key_points: [
        `Engage a global audience`,
        `Create interactive ad campaigns`,
        `Enhance brand visibility`
      ],
      img: ads
    },
    {
      name: `Exhibition`,
      description: `${basic.app} turns the world into an open-air gallery. Artists can use our platform to exhibit their work in diverse locations, offering a new dimension to art appreciation.`,
      key_points: [
        `Showcase art in unique settings`,
        `Connect with art enthusiasts`,
        `Expand your artistic reach`
      ],
      img: mask
    },
    {
      name: `Events / Campaigns`,
      description: `Join us for interactive virtual events and engaging seminars. Connect with experts, explore diverse topics, and expand your network—your gateway to insightful experiences and meaningful connections.`,
      key_points: [
        `Create events and brand campaigns`,
        `Discover new events and campaigns`,
        `Challenge and entertain others`
      ],
      img: diamond
    }]
const vuforia_steps = {
  title : `Upload the Vuforia scanned asset, captured using Lidar camera`,
  steps : [
      `Install the Vuforia Area Target Generator app from the App Store.`,
      `Launch the Vuforia Area Target Generator app.`,
      `Create a new project in the app.`,
      `Set up the project details, including the project name and target size.`,
      `Capture the area model by following the on-screen instructions.`,
      `Optimize the area model for better tracking performance.`,
      `Save the area model within the Vuforia Area Target Generator app.`,
      `Export the area model in the desired format (e.g., .unitypackage).`,
      `Upload the exported asset to a website for further use.`,
  ],  
}
export {
  basic,
    hero,
    about,
    use_case,
    vuforia_steps
}