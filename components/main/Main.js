import Users from '../users/Users';
import Income from '../income/Income';
import ActiveUsers from '../active-users/ActiveUsers';
import LatestSales from '../latest-sales/LatestSales';
import IconProgress from '../icon-progress/IconProgress';
import TwentyTwentyGoal from '../TwentyTwentyGoal/TwentyTwentyGoal';
import AffiliateImpressions from '../affiliate-impressions/AffiliateImpressions';
import './Main.css';

function Main() {
    return (
        <main className="main row">
            <div className="col-12 col-xl-7">
                <div className="row">
                    <div className="col-12">
                        <ActiveUsers />
                    </div>

                    <div className="col-12 col-md-6">
                        <Users />
                    </div>

                    <div className="col-12 col-md-6 order-md-2">
                        <IconProgress />
                    </div>

                    <div className="col-12 col-md-6 order-md-1">
                        <Income />
                    </div>

                    <div className="col-12 col-md-6 order-md-3">
                        <LatestSales />
                    </div>
                </div>
            </div>

            <div className="col-1 d-flex justify-content-center">
                <div className="page-divider"></div>
            </div>

            <div className="col-12 col-xl-4">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-12 order-md-4">
                        <TwentyTwentyGoal />
                    </div>

                    <div className="col-12 col-md-6 col-xl-12 order-md-5">
                        <AffiliateImpressions />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
