function EmotionComponent() {
  const emotions = ["Thankful", "angry", "anxious", "happy", "lonely", "sad"];
  const emotionText = emotions.map((item, index) => (
    <div className="wrapper" key={index}>
      <section className="emotion-contents">
        <div className="column">
          <div className="emotion-wrapper">
            {/* Assuming Logo is a component */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="-489 491 100 125"
              className="bible-logo"
            >
              <path d="M-451.5,561.8v-33.3h-16.7v-8.3h16.7v-16.7h8.3v16.7h16.7v8.3h-16.7v33.3H-451.5z M-393.2,591v-83.3l-8.3-8.3v83.3h-66.7  c-4.2,0-8.3-2.1-8.3-8.3h66.7V491h-62.5c-12.5,0-12.5,0-12.5,12.5v70.8c0,12.5,10.4,16.7,20.8,16.7H-393.2z" />
            </svg>
            {/* Assuming you're using React Router for navigation */}
            <Link className="emotion" to={`/display/${item}`}>
              {item}
            </Link>
          </div>
        </div>
      </section>
    </div>
  ));

  return <div>{emotionText}</div>;
}
