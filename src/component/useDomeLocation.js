import {useState, useEffect} from 'react'

const useDomLocation = (element) => {
  let [elementlocation, setElementlocation] = useState(getlocation(element));
  useEffect(() => {
    element.addEventListener('resize', handleResize);
    return () => {
      element.removeEventListener('resize', handleResize);
    }
  }, []);

  function handleResize() {
    setElementlocation(getlocation(element));
  }

  function getlocation(E) {
    let rect = E.getBoundingClientRect()
    let top = document.documentElement.clientTop
    let left = document.documentElement.clientLeft
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    return {
      top: rect.top - top,
      bottom: rect.bottom - top,
      left: rect.left - left,
      right: rect.right - left,
      width,
      height
    };
  }

  return elementlocation

}

export default useDomLocation
