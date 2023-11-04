import {ads, diamond, mask} from '@/app/svgs'
const hero = {
    name: "ArSpace",
    catch_line: "Unleash Your Creativity in Augmented Reality"
  }
const about = "ArSpace is a cutting-edge platform that empowers artists and creators to transform the world around them with Augmented Reality. Whether you're an aspiring artist, a business looking to advertise in innovative ways, or simply want to participate in exciting treasure hunts, ArSpace is the canvas for your imagination. Our user-friendly no-code tool makes AR content creation accessible to everyone."
// const use_case = [
//     {
//         name : 'Advertisement',
//         description : 'Arspace is a platform for artists to share their work with the world.',
//         key_points : [
//             'Arspace is a platform for',
//             'Arspace is a platform for',
//             'Arspace is a platform for'
//         ],
//         img: ads
//     },
//     {
//         name : 'Exhibition',
//         description : 'Arspace is a platform for artists to share their work with the world.',
//         key_points : [
//             'Arspace is a platform for',
//             'Arspace is a platform for',
//             'Arspace is a platform for'
//         ],
//         img: mask
//     },
//     {
//         name : 'Treasure Hunt',
//         description : 'Arspace is a platform for artists to share their work with the world.',
//         key_points : [
//             'Arspace is a platform for',
//             'Arspace is a platform for',
//             'Arspace is a platform for'
//         ],
//         img: diamond
//     }
// ]
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
      name: "Treasure Hunt",
      description: "Get ready for an exciting AR treasure hunt experience. ArSpace allows you to create and participate in location-based treasure hunts, bringing adventure to the real world.",
      key_points: [
        "Create thrilling treasure hunts",
        "Discover hidden treasures",
        "Challenge and entertain participants"
      ],
      img: diamond
    }]

export {
    hero,
    about,
    use_case
}