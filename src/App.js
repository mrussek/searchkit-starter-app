import React, { Component } from 'react'
import { SearchkitManager, SearchkitProvider, SearchBox, Hits, TopBar, LayoutResults, Layout, NoHits, Pagination, LayoutBody } from 'searchkit'
import './index.css'

const host = "http://localhost:9200"
const searchkit = new SearchkitManager(host)

const HitItem = (props) => {
  return (<div className="result">
    <a href={props.result["_source"].url}>{props.result["_source"].content.substring(0, 50)}...</a>
  </div>)
}

class App extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox searchOnChange={true} queryOptions={{ analyzer: "standard" }} queryFields={["content"]} />
          </TopBar>
          <LayoutBody>
            <LayoutResults>
              <Hits hitsPerPage={10} itemComponent={HitItem} mod="sk-hits-list" />
              <Pagination showNumbers={true} />
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default App;
