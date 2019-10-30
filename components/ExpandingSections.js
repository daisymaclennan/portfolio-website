import styled from 'styled-components'

const ExpandingSections = styled.div`
.expandingSection--child {
  display: none;
}
.open ~ div {
  display: block !important;
  margin-top: 20px;
}
.open > svg {
  transform: rotate(180deg);
}

.link--icon > * {
  pointer-events: none;
}
@media screen and (max-width: 800px) {
  .expandingSection + .expandingSection {
    margin-top: 10px;
  }
  .open ~ div {
    margin-top: 15px;
  }
}
@media screen and (min-width: 801px) and (max-width: 1440px) {
  .expandingSection + .expandingSection {
    margin-top: 20px;
  }
  .expandingSection {
    width: calc(100vw - 435px);
  }
}
@media screen and (min-width: 1441px) {
  .expandingSection + .expandingSection {
    margin-top: 20px;
  }
  .expandingSection {
    width: calc(100vw - 672px);
  }
}
/*Temporary styles until slider is built*/
.siema {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  max-width: calc(100vw - 672px);
}

.siema img{
  width: 100%;
}

`

export default ExpandingSections
