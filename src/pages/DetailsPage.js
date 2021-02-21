import React, { Component } from 'react';
import Header from 'parts/Header';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetails from 'parts/PageDetailTitle';
import PageDetailsDecription from 'parts/PageDetailsDecription';
import BookingForm from 'parts/BookingForm';
import ItemDetails from 'json/itemDetails.json';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';
// redux
import { connect } from 'react-redux';
import { checkoutBooking } from 'store/actions/checkout';

class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetails breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailsDecription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailsPage);
