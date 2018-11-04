import React from 'react';
import ReactDOM from 'react-dom';
import SlideFilters from './SlideFilters';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from "enzyme";
import expect from 'expect';

describe("SlideFilters DOM test", () => {
  let props;
  let mountedSlideFilters;
  const slideFilters = () => {
    if (!mountedSlideFilters) {
      mountedSlideFilters = mount(
        <SlideFilters {...props} />
      );
    }
    return mountedSlideFilters;
  }

  beforeEach(() => {
    let store;
    props = {
      config: { maxVideosToLoad: 24 },
      onChanges: (fn) => {
        if (fn) {
          store = fn;
        }

        store();
      }
    };
    mountedSlideFilters = undefined;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SlideFilters {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('it has correct props when mounted', () => {
    expect(slideFilters().props().config.maxVideosToLoad).toEqual(24);
  });

  it('it has initial state categories when mounted', () => {
    expect(slideFilters().state().categories.length).toBeGreaterThanOrEqual(0);
    expect(slideFilters().state().isError).toBeFalsy();
  });

  it("always renders a `div`", () => {
    const divs = slideFilters().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a `h3` title", () => {
    const divs = slideFilters().find("h3");
    expect(divs.length).toBeGreaterThan(0);
  });
});

