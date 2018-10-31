import {
  Button,
  ButtonRippleWithoutJs,
  ButtonWithoutRipple,
  Checkbox,
  Input,
  InputWithoutJs,
  Price,
  RadioButton,
  Ripple,
  RippleWihoutJs,
  Select,
  SelectOption,
  SelectWithoutJs,
  Spinner,
  Switch,
  Textarea,
  TextareaStatic,
  TextareaWithoutJs,
  ScrollTabs,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  Annotation,
  ColorLineText,
  Banner,
  BannerItem,
  BannerPaginatorItem,
  Card,
  CardImage,
  CardImageList,
  FullscreenImage,
  RowList,
  RowListItem,
  Table,
  TableHeadItem,
  TableRow,
  TableItem,
  TableCol,
  DownloadContent
} from '../lib/components/index';

import { DocumentationBuilder } from '../develover-lib/components/index'
const componentsList = {};
componentsList[Button.name] = Button;
componentsList[ButtonRippleWithoutJs.name] = ButtonRippleWithoutJs;
componentsList[ButtonWithoutRipple.name] = ButtonWithoutRipple;
componentsList[Checkbox.name] = Checkbox;
componentsList[Input.name] = Input;
componentsList[InputWithoutJs.name] = InputWithoutJs;
componentsList[Price.name] = Price;
componentsList[RadioButton.name] = RadioButton;
componentsList[Ripple.name] = Ripple;
componentsList[RippleWihoutJs.name] = RippleWihoutJs;
componentsList[Select.name] = Select;
componentsList[SelectOption.name] = SelectOption;
componentsList[SelectWithoutJs.name] = SelectWithoutJs;
componentsList[Spinner.name] = Spinner;
componentsList[Switch.name] = Switch;
componentsList[Textarea.name] = Textarea;
componentsList[TextareaStatic.name] = TextareaStatic;
componentsList[TextareaWithoutJs.name] = TextareaWithoutJs;
componentsList[ScrollTabs.name] = ScrollTabs;
componentsList[Tabs.name] = Tabs;
componentsList[TabsNavigationItem.name] = TabsNavigationItem;
componentsList[TabsContentItem.name] = TabsContentItem;
componentsList[Annotation.name] = Annotation;
componentsList[ColorLineText.name] = ColorLineText;
componentsList[Banner.name] = Banner;
componentsList[BannerItem.name] = BannerItem;
componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;
componentsList[Card.name] = Card;
componentsList[CardImage.name] = CardImage;
componentsList[CardImageList.name] = CardImageList;
componentsList[FullscreenImage.name] = FullscreenImage;
componentsList[RowList.name] = RowList;
componentsList[RowListItem.name] = RowListItem;

componentsList[Table.name] = Table;
componentsList[TableHeadItem.name] = TableHeadItem;
componentsList[TableRow.name] = TableRow;
componentsList[TableItem.name] = TableItem;
componentsList[TableCol.name] = TableCol;
componentsList[DownloadContent.name] = DownloadContent;
componentsList[DocumentationBuilder.name] = DocumentationBuilder;

export default {...componentsList};
