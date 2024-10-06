import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBenefits extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'connector';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksContactUs extends Schema.Component {
  collectionName: 'components_blocks_contactuses';
  info: {
    displayName: 'ContactUs';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    mapAddress: Attribute.String & Attribute.Required;
    options: Attribute.Component<'form.form-option', true>;
    submitButton: Attribute.Component<'shared.button'>;
  };
}

export interface BlocksFaculties extends Schema.Component {
  collectionName: 'components_blocks_faculties';
  info: {
    displayName: 'Faculties';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    categories: Attribute.Relation<
      'blocks.faculties',
      'oneToMany',
      'api::faculty-category.faculty-category'
    >;
    description: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    sliders: Attribute.Component<'shared.hero-item', true>;
  };
}

export interface BlocksLawsList extends Schema.Component {
  collectionName: 'components_blocks_laws_lists';
  info: {
    displayName: 'LawsList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'shared.button'>;
    withPagination: Attribute.Boolean;
    categories: Attribute.Relation<
      'blocks.laws-list',
      'oneToMany',
      'api::law-category.law-category'
    >;
  };
}

export interface BlocksLiterature extends Schema.Component {
  collectionName: 'components_blocks_literature';
  info: {
    displayName: 'Literature';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Component<'shared.button'>;
    categories: Attribute.Relation<
      'blocks.literature',
      'oneToMany',
      'api::literature-category.literature-category'
    >;
    withPagination: Attribute.Boolean;
    description: Attribute.String;
  };
}

export interface BlocksManagement extends Schema.Component {
  collectionName: 'components_blocks_managements';
  info: {
    displayName: 'management';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    management: Attribute.Relation<
      'blocks.management',
      'oneToMany',
      'api::managment.managment'
    >;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksNewsAndArticles extends Schema.Component {
  collectionName: 'components_blocks_news_and_articles';
  info: {
    displayName: 'NewsAndArticles';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    button: Attribute.Component<'shared.button'>;
    categories: Attribute.Relation<
      'blocks.news-and-articles',
      'oneToMany',
      'api::article-category.article-category'
    >;
    withPagination: Attribute.Boolean;
    description: Attribute.String;
  };
}

export interface BlocksPageNavigationTabs extends Schema.Component {
  collectionName: 'components_blocks_page_navigation_tabs';
  info: {
    displayName: 'PageNavigationTabs';
    description: '';
  };
  attributes: {
    options: Attribute.Component<'form.page-option', true>;
  };
}

export interface BlocksRecentUpdates extends Schema.Component {
  collectionName: 'components_blocks_recent_updates';
  info: {
    displayName: 'RecentUpdates';
    icon: 'gate';
    description: '';
  };
  attributes: {
    title1: Attribute.String;
    title2: Attribute.String;
    list1: Attribute.Component<'cards.card', true>;
    actualArticles: Attribute.Relation<
      'blocks.recent-updates',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlocksSubmitForm extends Schema.Component {
  collectionName: 'components_blocks_submit_forms';
  info: {
    displayName: 'SubmitForm';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    submitButton: Attribute.Component<'shared.button'>;
    options: Attribute.Component<'form.form-option', true>;
  };
}

export interface BlocksSubscribeForm extends Schema.Component {
  collectionName: 'components_blocks_subscribe_forms';
  info: {
    displayName: 'SubscribeForm';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    inputSubscribe: Attribute.Component<'shared.input'>;
    subscribeButton: Attribute.Component<'shared.button'>;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    href: Attribute.String;
    variant: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.Required;
  };
}

export interface FormFormOption extends Schema.Component {
  collectionName: 'components_form_form_options';
  info: {
    displayName: 'FormOption';
    icon: 'file';
    description: '';
  };
  attributes: {
    inputId: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['input', 'select', 'text-area']> &
      Attribute.Required &
      Attribute.DefaultTo<'input'>;
    name: Attribute.String & Attribute.Required;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<false>;
    defaultValue: Attribute.String;
    options: Attribute.Component<'form.select-option', true>;
    inputType: Attribute.Enumeration<['text', 'number', 'email']>;
  };
}

export interface FormPageOption extends Schema.Component {
  collectionName: 'components_form_page_options';
  info: {
    displayName: 'pageOption';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface FormSelectOption extends Schema.Component {
  collectionName: 'components_form_select_options';
  info: {
    displayName: 'selectOption';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.Integer & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'folder';
    description: '';
  };
  attributes: {
    emailTitle: Attribute.String;
    addressTitle: Attribute.String;
    phoneTitle: Attribute.String;
    email: Attribute.String;
    address: Attribute.String;
    phone: Attribute.String;
    logo: Attribute.Component<'layout.logo'>;
    links: Attribute.Component<'shared.link', true>;
    socialLinks: Attribute.Component<'shared.social-link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'logo';
    icon: 'cup';
  };
  attributes: {
    img: Attribute.Media<'images'> & Attribute.Required;
    label: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'layout.logo'>;
    links: Attribute.Component<'shared.link', true>;
    buttons: Attribute.Component<'shared.button', true>;
    input: Attribute.Component<'shared.input'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cube';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    href: Attribute.String;
  };
}

export interface SharedCheckbox extends Schema.Component {
  collectionName: 'components_shared_checkboxes';
  info: {
    displayName: 'Checkbox';
    icon: 'crop';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String;
    hrefText: Attribute.String;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SharedHeroItem extends Schema.Component {
  collectionName: 'components_shared_hero_items';
  info: {
    displayName: 'HeroItem';
    icon: 'arrowUp';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface SharedInput extends Schema.Component {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'Input';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['text', 'email', 'number', 'tel']> &
      Attribute.Required;
    defaultValue: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    children: Attribute.Component<'shared.sub-link', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface SharedSubLink extends Schema.Component {
  collectionName: 'components_shared_sub_links';
  info: {
    displayName: 'SubLink';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    subLabel: Attribute.String;
    href: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.benefits': BlocksBenefits;
      'blocks.contact-us': BlocksContactUs;
      'blocks.faculties': BlocksFaculties;
      'blocks.hero': BlocksHero;
      'blocks.laws-list': BlocksLawsList;
      'blocks.literature': BlocksLiterature;
      'blocks.management': BlocksManagement;
      'blocks.news-and-articles': BlocksNewsAndArticles;
      'blocks.page-navigation-tabs': BlocksPageNavigationTabs;
      'blocks.recent-updates': BlocksRecentUpdates;
      'blocks.submit-form': BlocksSubmitForm;
      'blocks.subscribe-form': BlocksSubscribeForm;
      'cards.card': CardsCard;
      'form.form-option': FormFormOption;
      'form.page-option': FormPageOption;
      'form.select-option': FormSelectOption;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'shared.button': SharedButton;
      'shared.checkbox': SharedCheckbox;
      'shared.heading': SharedHeading;
      'shared.hero-item': SharedHeroItem;
      'shared.input': SharedInput;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.sub-link': SharedSubLink;
    }
  }
}
