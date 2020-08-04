import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Operation as DataOperation } from '../../reducer/data/data.js';
import { getMyList } from '../../reducer/data/selectors.js';
import Header from '../header/header.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Footer from '../footer/footer.jsx';

class MyList extends PureComponent {
  componentDidMount() {
    const { loadMyList } = this.props;

    loadMyList();
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="user-page">
        <Header
          renderTitle={() => (
            <h1 className="page-title user-page__title">My list</h1>
          )}
        />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            <MovieList movies={movies} />
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: getMyList(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMyList: () => dispatch(DataOperation.loadMyList()),
});

MyList.propTypes = {
  loadMyList: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export { MyList };
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
