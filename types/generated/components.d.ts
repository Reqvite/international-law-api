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
  };
}

export interface BlocksSubmitForm extends Schema.Component {
  collectionName: 'components_blocks_submit_forms';
  info: {
    displayName: 'SubmitForm';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    inputs: Attribute.Component<'shared.input', true>;
    checkboxes: Attribute.Component<'shared.checkbox', true>;
    submitButton: Attribute.Component<'shared.button'>;
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

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'folder';
    description: '';
  };
  attributes: {
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
    img: Attribute.Media & Attribute.Required;
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
    image: Attribute.Media & Attribute.Required;
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
    image: Attribute.Media;
  };
}

export interface SharedRecentList extends Schema.Component {
  collectionName: 'components_shared_recent_lists';
  info: {
    displayName: 'RecentList';
    icon: 'connector';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.Required;
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
    metaImage: Attribute.Media;
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
      'blocks.hero': BlocksHero;
      'blocks.recent-updates': BlocksRecentUpdates;
      'blocks.submit-form': BlocksSubmitForm;
      'blocks.subscribe-form': BlocksSubscribeForm;
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
      'shared.recent-list': SharedRecentList;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.sub-link': SharedSubLink;
    }
  }
}
