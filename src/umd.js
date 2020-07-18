import { 
    ElementTiptapPlugin,
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Underline,
    Italic,
    Strike,
    Link,
    Image,
    Blockquote,
    TextAlign,
    ListItem,
    BulletList,
    OrderedList,
    Indent,
    HorizontalRule,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TextColor,
    TextHighlight,
    Preview,
    Print,
    Fullscreen,
    CodeView,
    FontSize,
    History
} from 'element-tiptap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-tiptap/lib/index.css';

import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js'; // autoCloseTags


window.ElementTiptap = {
    install(Vue){
        Vue.use(ElementUI)
        Vue.use(ElementTiptapPlugin)
    },
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Underline,
    Italic,
    Strike,
    Link,
    Image,
    Blockquote,
    TextAlign,
    ListItem,
    BulletList,
    OrderedList,
    Indent,
    HorizontalRule,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TextColor,
    TextHighlight,
    Preview,
    Print,
    Fullscreen,
    CodeView,
    History,
    FontSize,
    codemirror
}