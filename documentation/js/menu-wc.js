'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gifs-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DahsboardPageComponent.html" data-type="entity-link" >DahsboardPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GifHistoryComponent.html" data-type="entity-link" >GifHistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GifListComponent.html" data-type="entity-link" >GifListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GifListItemComponent.html" data-type="entity-link" >GifListItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchPageComponent.html" data-type="entity-link" >SearchPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideMenuComponent.html" data-type="entity-link" >SideMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideMenuHeaderComponent.html" data-type="entity-link" >SideMenuHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideMenuOptionsComponent.html" data-type="entity-link" >SideMenuOptionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrendingPageComponent.html" data-type="entity-link" >TrendingPageComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/GifMapper.html" data-type="entity-link" >GifMapper</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GifsService.html" data-type="entity-link" >GifsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScrollStateService.html" data-type="entity-link" >ScrollStateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Analytics.html" data-type="entity-link" >Analytics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownsizedSmall.html" data-type="entity-link" >DownsizedSmall</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FixedHeight.html" data-type="entity-link" >FixedHeight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gif.html" data-type="entity-link" >Gif</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GiphyItem.html" data-type="entity-link" >GiphyItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GiphyResponse.html" data-type="entity-link" >GiphyResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Images.html" data-type="entity-link" >Images</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Looping.html" data-type="entity-link" >Looping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuOption.html" data-type="entity-link" >MenuOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Onclick.html" data-type="entity-link" >Onclick</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/The480_WStill.html" data-type="entity-link" >The480_WStill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});