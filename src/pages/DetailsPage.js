import React, { Component } from 'react';
import Header from 'parts/Header';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetails from 'parts/PageDetailTitle';
import PageDetailsDecription from 'parts/PageDetailsDecription';
import BookingForm from 'parts/BookingForm';
import Activities from 'parts/Activities';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';
// redux
import { connect } from 'react-redux';
import { checkoutBooking } from 'store/actions/checkout';
import { fetchPage } from 'store/actions/page';

class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }

  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetails breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id]} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailsDecription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
