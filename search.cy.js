///<reference types="cypress"/>
describe("Search results for cities", () => {
  it("visit the websites / Search for hotel results within one of three cities randomly and filter the prices from low to high and do assertion on it", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get(".cta__saudi").click();
    cy.get("#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm").click();
    let city = ["Dubai", "Jeddah", "Amman"];
    let RandomEnglish = Math.floor(Math.random() * city.length);
    cy.get('[data-testid="AutoCompleteInput"]').type(city[RandomEnglish]);
    cy.get('[data-testid="AutoCompleteResultsList"]').find("li").eq(1).click();
    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
    cy.get('[data-testid="HotelSearchResult__Hotel0__TitleLabel"]').click();
    cy.wait(10000);
  cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click();  
  cy.wait(20000)
 
  cy.get('[data-testid="HotelSearchResult__Hotel0__PriceLabel"]')
    .invoke("text")
    .then((price) => {
      const priceValue = parseInt(price.replace("SAR", "").trim());
      cy.get(".Price__Value")
        .last()
        .invoke("text")
        .then((lastPrice) => {
          const lastPriceValue = parseInt(lastPrice.replace("SAR", "").trim());
          expect(lastPriceValue).to.be.greaterThan(priceValue);
        });
    });
});
});      c
  

