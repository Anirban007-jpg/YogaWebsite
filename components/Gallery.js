export default function Gallery() {
  const myImages = [
    {
      index: 1,
      alt: "Easy Pose",
      image: "1.jpg",
    },
    {
      index: 2,
      alt: "Childs Pose",
      image: "2.jpg",
    },
    {
      index: 3,
      alt: "Squat",
      image: "3.jpg",
    },
    {
      index: 4,
      alt: "Seated twist",
      image: "4.jpg",
    },
  ];

  return (
    <div className="gallery">
      {myImages.map((item) => (
        <img
          src={`../images/${item.image}`}
          alt={item.alt}
          key={item.index}
          className="gallery-img"
        />
      ))}
    </div>
  );
}
