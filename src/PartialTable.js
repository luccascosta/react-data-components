import React, { Component } from 'react';
import Table from './Table';
import Pagination from './Pagination';

export default class PartialTable extends Component {
  render() {
    const {
      onFilter,
      onPageSizeChange,
      onPageNumberChange,
      onSort,
      pageLengthOptions,
      columns,
      keys,
      buildRowOptions,
      language,
      onRowClick,
    } = this.props;

    // Protect against unloaded data.
    if (!this.props.data) {
      return null;
    }

    const {
      page,
      pageSize,
      pageNumber,
      totalPages,
      sortBy,
      filterValues,
    } = this.props.data;

    return (
      <div>
        <div className="columns">
          <div className="column is-3">
            <div>
              <label htmlFor="page-menu">
                {language === 'pt-BR' ? 'Itens: ' : 'Page size: '}
              </label>
              <select
                id="page-menu"
                value={pageSize}
                className="select"
                onChange={onPageSizeChange}
              >
                {pageLengthOptions.map(opt => (
                  <option key={opt} value={opt}>
                    {opt === 0 ? 'All' : opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                id="search-field"
                type="search"
                value={filterValues.globalSearch}
                className="input is-small"
                placeholder={language === 'pt-BR' ? 'Pesquisar' : 'Search'}
                style={{ marginTop: '5px' }}
                onChange={onFilter.bind(null, 'globalSearch')}
              />
            </div>
          </div>
          <div className="column is-9">
            <Pagination
              className="pagination is-rounded is-pulled-right is-small"
              currentPage={pageNumber}
              totalPages={totalPages}
              onChangePage={onPageNumberChange}
            />
          </div>
        </div>
        <Table
          className="table table-bordered is-striped is-narrow is-hoverable is-fullwidth"
          dataArray={page}
          columns={columns}
          keys={keys}
          buildRowOptions={buildRowOptions}
          sortBy={sortBy}
          onSort={onSort}
          language={language}
          onRowClick={onRowClick}
        />
      </div>
    );
  }
}
