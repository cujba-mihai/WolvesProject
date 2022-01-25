import { useEffect, useState } from 'react';
import { useMemo } from 'react';

//Component imports
import withFetch from '../container/withFetch';
import Card from '../card/Card';
import CardSkeleton from '../cardSkeletons/CardSkeleton';

//Styles import
import './styles/hero.scss';

const WrappedComponent = (props) => {
  const {
    data: { wolves },
    isLoading,
    isError,
  } = props;

  const [showCardSkeletons, setShowCardSkeletons] = useState(true);

  const skeletonArr = useMemo(() => Array(10).fill(true), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardSkeletons(!showCardSkeletons);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="hero">
      <div className="hero__container">
        <div className="hero__head-container">
          <h1 className="hero__heading">LATEST STORIES</h1>
          <h3 className="hero__subheading">
            <span className="hero__subheading_isPrimary">Subscribe</span> for
            full access to read stories from National Geographic.
          </h3>
        </div>
        <div className="hero__cart-container">
          {showCardSkeletons
            ? skeletonArr.map((e, i) => <CardSkeleton key={i} />)
            : !showCardSkeletons && wolves
            ? wolves.map((e, i) => <Card key={i} images={e.images} />)
            : null}
          {/* {wolves
            ? wolves.map((e, i) => <Card key={i} images={e.images} />)
            : null} */}
          {isError ? <h3>Oops! An error occured. ☹</h3> : null}
          {/* {isLoading ? <h1>Loading... ⌚</h1> : null} */}
        </div>
      </div>
    </main>
  );
};

const Hero = withFetch(WrappedComponent, '../../api/wolves.json');

export default Hero;
