import Carousel from '../../components/carousel/Carousel';
import './TwentyTwentyGoal.css';

function TwentyTwentyGoal() {
    return (
        <section className="page-widget twenty-twenty-goal">
            <h2 className="text-lg mb-2">2020 Goal</h2>

            <div className="my-5">
                <Carousel />
            </div>

            <div className="mb-4">
                <p className="mb-2 fw-semibold text-base d-flex justify-content-between">
                    Bento Illustration <span>40%</span>
                </p>
                <div className="twenty-twenty-goal__progress twenty-twenty-goal__progress__40"></div>
            </div>

            <div className="mb-4">
                <p className="mb-2 fw-semibold text-base d-flex justify-content-between">
                    Bento Illustration <span>25%</span>
                </p>
                <div className="twenty-twenty-goal__progress twenty-twenty-goal__progress__25"></div>
            </div>

            <div className="mb-4">
                <p className="mb-2 fw-semibold text-base d-flex justify-content-between">
                    Bento Illustration <span>50%</span>
                </p>
                <div className="twenty-twenty-goal__progress twenty-twenty-goal__progress__50"></div>
            </div>

            <div className="mb-4">
                <p className="mb-2 fw-semibold text-base d-flex justify-content-between">
                    Bento Illustration <span>80%</span>
                </p>
                <div className="twenty-twenty-goal__progress twenty-twenty-goal__progress__80"></div>
            </div>
        </section>
    );
}

export default TwentyTwentyGoal;
