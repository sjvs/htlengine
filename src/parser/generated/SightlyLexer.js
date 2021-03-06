/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// Generated from src/parser/grammar/SightlyLexer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002 \u00fc\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002N\n\u0002\f\u0002\u000e\u0002Q\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006i\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0007\u001a",
    "\u0099\n\u001a\f\u001a\u000e\u001a\u009c\u000b\u001a\u0003\u001b\u0006",
    "\u001b\u009f\n\u001b\r\u001b\u000e\u001b\u00a0\u0003\u001c\u0006\u001c",
    "\u00a4\n\u001c\r\u001c\u000e\u001c\u00a5\u0003\u001c\u0003\u001c\u0006",
    "\u001c\u00aa\n\u001c\r\u001c\u000e\u001c\u00ab\u0003\u001c\u0005\u001c",
    "\u00af\n\u001c\u0003\u001c\u0006\u001c\u00b2\n\u001c\r\u001c\u000e\u001c",
    "\u00b3\u0003\u001c\u0005\u001c\u00b7\n\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0007\u001d\u00c1\n\u001d\f\u001d\u000e\u001d\u00c4\u000b\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u00d5\n\u001f\f\u001f\u000e",
    "\u001f\u00d8\u000b\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u00de\n\u001f\f\u001f\u000e\u001f\u00e1\u000b\u001f\u0003",
    "\u001f\u0005\u001f\u00e4\n\u001f\u0003 \u0003 \u0005 \u00e8\n \u0003",
    " \u0006 \u00eb\n \r \u000e \u00ec\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0005\"\u00f4\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0004O\u00c2\u0002$\u0004\u0003\u0006\u0004\b\u0005\n\u0006\f\u0007",
    "\u000e\b\u0010\t\u0012\n\u0014\u000b\u0016\f\u0018\r\u001a\u000e\u001c",
    "\u000f\u001e\u0010 \u0011\"\u0012$\u0013&\u0014(\u0015*\u0016,\u0017",
    ".\u00180\u00192\u001a4\u001b6\u001c8\u001d:\u001e<\u001f> @\u0002B\u0002",
    "D\u0002F\u0002\u0004\u0002\u0003\u000b\u0005\u0002C\\aac|\u0006\u0002",
    "2<C\\aac|\u0005\u0002\u000b\u000f\"\"\u00a2\u00a2\u0004\u0002$$^^\u0004",
    "\u0002))^^\u0004\u0002GGgg\u0004\u0002--//\u0005\u00022;CHch\n\u0002",
    "$$))^^ddhhppttvv\u0002\u0108\u0002\u0004\u0003\u0002\u0002\u0002\u0002",
    "\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002\u0002\u0003",
    "\n\u0003\u0002\u0002\u0002\u0003\f\u0003\u0002\u0002\u0002\u0003\u000e",
    "\u0003\u0002\u0002\u0002\u0003\u0010\u0003\u0002\u0002\u0002\u0003\u0012",
    "\u0003\u0002\u0002\u0002\u0003\u0014\u0003\u0002\u0002\u0002\u0003\u0016",
    "\u0003\u0002\u0002\u0002\u0003\u0018\u0003\u0002\u0002\u0002\u0003\u001a",
    "\u0003\u0002\u0002\u0002\u0003\u001c\u0003\u0002\u0002\u0002\u0003\u001e",
    "\u0003\u0002\u0002\u0002\u0003 \u0003\u0002\u0002\u0002\u0003\"\u0003",
    "\u0002\u0002\u0002\u0003$\u0003\u0002\u0002\u0002\u0003&\u0003\u0002",
    "\u0002\u0002\u0003(\u0003\u0002\u0002\u0002\u0003*\u0003\u0002\u0002",
    "\u0002\u0003,\u0003\u0002\u0002\u0002\u0003.\u0003\u0002\u0002\u0002",
    "\u00030\u0003\u0002\u0002\u0002\u00032\u0003\u0002\u0002\u0002\u0003",
    "4\u0003\u0002\u0002\u0002\u00036\u0003\u0002\u0002\u0002\u00038\u0003",
    "\u0002\u0002\u0002\u0003:\u0003\u0002\u0002\u0002\u0003<\u0003\u0002",
    "\u0002\u0002\u0003>\u0003\u0002\u0002\u0002\u0004H\u0003\u0002\u0002",
    "\u0002\u0006T\u0003\u0002\u0002\u0002\bY\u0003\u0002\u0002\u0002\n[",
    "\u0003\u0002\u0002\u0002\fh\u0003\u0002\u0002\u0002\u000ej\u0003\u0002",
    "\u0002\u0002\u0010l\u0003\u0002\u0002\u0002\u0012n\u0003\u0002\u0002",
    "\u0002\u0014p\u0003\u0002\u0002\u0002\u0016s\u0003\u0002\u0002\u0002",
    "\u0018v\u0003\u0002\u0002\u0002\u001ax\u0003\u0002\u0002\u0002\u001c",
    "z\u0003\u0002\u0002\u0002\u001e|\u0003\u0002\u0002\u0002 ~\u0003\u0002",
    "\u0002\u0002\"\u0080\u0003\u0002\u0002\u0002$\u0082\u0003\u0002\u0002",
    "\u0002&\u0084\u0003\u0002\u0002\u0002(\u0086\u0003\u0002\u0002\u0002",
    "*\u0088\u0003\u0002\u0002\u0002,\u008b\u0003\u0002\u0002\u0002.\u008e",
    "\u0003\u0002\u0002\u00020\u0090\u0003\u0002\u0002\u00022\u0093\u0003",
    "\u0002\u0002\u00024\u0096\u0003\u0002\u0002\u00026\u009e\u0003\u0002",
    "\u0002\u00028\u00b6\u0003\u0002\u0002\u0002:\u00b8\u0003\u0002\u0002",
    "\u0002<\u00cd\u0003\u0002\u0002\u0002>\u00e3\u0003\u0002\u0002\u0002",
    "@\u00e5\u0003\u0002\u0002\u0002B\u00ee\u0003\u0002\u0002\u0002D\u00f3",
    "\u0003\u0002\u0002\u0002F\u00f5\u0003\u0002\u0002\u0002HI\u0007^\u0002",
    "\u0002IJ\u0007&\u0002\u0002JK\u0007}\u0002\u0002KO\u0003\u0002\u0002",
    "\u0002LN\u000b\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002",
    "\u0002\u0002OP\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002PR\u0003",
    "\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002RS\u0007\u007f\u0002\u0002",
    "S\u0005\u0003\u0002\u0002\u0002TU\u0007&\u0002\u0002UV\u0007}\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WX\b\u0003\u0002\u0002X\u0007\u0003",
    "\u0002\u0002\u0002YZ\u000b\u0002\u0002\u0002Z\t\u0003\u0002\u0002\u0002",
    "[\\\u0007\u007f\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\b\u0005\u0003",
    "\u0002^\u000b\u0003\u0002\u0002\u0002_`\u0007v\u0002\u0002`a\u0007t",
    "\u0002\u0002ab\u0007w\u0002\u0002bi\u0007g\u0002\u0002cd\u0007h\u0002",
    "\u0002de\u0007c\u0002\u0002ef\u0007n\u0002\u0002fg\u0007u\u0002\u0002",
    "gi\u0007g\u0002\u0002h_\u0003\u0002\u0002\u0002hc\u0003\u0002\u0002",
    "\u0002i\r\u0003\u0002\u0002\u0002jk\u00070\u0002\u0002k\u000f\u0003",
    "\u0002\u0002\u0002lm\u0007*\u0002\u0002m\u0011\u0003\u0002\u0002\u0002",
    "no\u0007+\u0002\u0002o\u0013\u0003\u0002\u0002\u0002pq\u0007(\u0002",
    "\u0002qr\u0007(\u0002\u0002r\u0015\u0003\u0002\u0002\u0002st\u0007~",
    "\u0002\u0002tu\u0007~\u0002\u0002u\u0017\u0003\u0002\u0002\u0002vw\u0007",
    "#\u0002\u0002w\u0019\u0003\u0002\u0002\u0002xy\u0007.\u0002\u0002y\u001b",
    "\u0003\u0002\u0002\u0002z{\u0007]\u0002\u0002{\u001d\u0003\u0002\u0002",
    "\u0002|}\u0007_\u0002\u0002}\u001f\u0003\u0002\u0002\u0002~\u007f\u0007",
    "?\u0002\u0002\u007f!\u0003\u0002\u0002\u0002\u0080\u0081\u0007B\u0002",
    "\u0002\u0081#\u0003\u0002\u0002\u0002\u0082\u0083\u0007A\u0002\u0002",
    "\u0083%\u0003\u0002\u0002\u0002\u0084\u0085\u0007<\u0002\u0002\u0085",
    "\'\u0003\u0002\u0002\u0002\u0086\u0087\u0007>\u0002\u0002\u0087)\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0007>\u0002\u0002\u0089\u008a\u0007",
    "?\u0002\u0002\u008a+\u0003\u0002\u0002\u0002\u008b\u008c\u0007@\u0002",
    "\u0002\u008c\u008d\u0007?\u0002\u0002\u008d-\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0007@\u0002\u0002\u008f/\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0007?\u0002\u0002\u0091\u0092\u0007?\u0002\u0002\u00921\u0003",
    "\u0002\u0002\u0002\u0093\u0094\u0007#\u0002\u0002\u0094\u0095\u0007",
    "?\u0002\u0002\u00953\u0003\u0002\u0002\u0002\u0096\u009a\t\u0002\u0002",
    "\u0002\u0097\u0099\t\u0003\u0002\u0002\u0098\u0097\u0003\u0002\u0002",
    "\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b5\u0003\u0002\u0002",
    "\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u009f\u00042;\u0002",
    "\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002",
    "\u00a17\u0003\u0002\u0002\u0002\u00a2\u00a4\u00042;\u0002\u00a3\u00a2",
    "\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\u0003\u0002\u0002\u0002\u00a7\u00a9\u00070\u0002\u0002\u00a8\u00aa",
    "\u00042;\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003",
    "\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003",
    "\u0002\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00af\u0005",
    "@ \u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002",
    "\u0002\u0002\u00af\u00b7\u0003\u0002\u0002\u0002\u00b0\u00b2\u00042",
    ";\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002",
    "\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b7\u0005@",
    " \u0002\u00b6\u00a3\u0003\u0002\u0002\u0002\u00b6\u00b1\u0003\u0002",
    "\u0002\u0002\u00b79\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007>\u0002",
    "\u0002\u00b9\u00ba\u0007#\u0002\u0002\u00ba\u00bb\u0007/\u0002\u0002",
    "\u00bb\u00bc\u0007/\u0002\u0002\u00bc\u00bd\u00071\u0002\u0002\u00bd",
    "\u00be\u0007,\u0002\u0002\u00be\u00c2\u0003\u0002\u0002\u0002\u00bf",
    "\u00c1\u000b\u0002\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c1",
    "\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c2",
    "\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4",
    "\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007,\u0002\u0002\u00c6",
    "\u00c7\u00071\u0002\u0002\u00c7\u00c8\u0007/\u0002\u0002\u00c8\u00c9",
    "\u0007/\u0002\u0002\u00c9\u00ca\u0007@\u0002\u0002\u00ca\u00cb\u0003",
    "\u0002\u0002\u0002\u00cb\u00cc\b\u001d\u0004\u0002\u00cc;\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\t\u0004\u0002\u0002\u00ce\u00cf\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\b\u001e\u0005\u0002\u00d0=\u0003\u0002\u0002",
    "\u0002\u00d1\u00d6\u0007$\u0002\u0002\u00d2\u00d5\u0005D\"\u0002\u00d3",
    "\u00d5\n\u0005\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4",
    "\u00d3\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6",
    "\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7",
    "\u00d9\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9",
    "\u00e4\u0007$\u0002\u0002\u00da\u00df\u0007)\u0002\u0002\u00db\u00de",
    "\u0005D\"\u0002\u00dc\u00de\n\u0006\u0002\u0002\u00dd\u00db\u0003\u0002",
    "\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002",
    "\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002",
    "\u0002\u0002\u00e0\u00e2\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002",
    "\u0002\u0002\u00e2\u00e4\u0007)\u0002\u0002\u00e3\u00d1\u0003\u0002",
    "\u0002\u0002\u00e3\u00da\u0003\u0002\u0002\u0002\u00e4?\u0003\u0002",
    "\u0002\u0002\u00e5\u00e7\t\u0007\u0002\u0002\u00e6\u00e8\t\b\u0002\u0002",
    "\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002",
    "\u00e8\u00ea\u0003\u0002\u0002\u0002\u00e9\u00eb\u00042;\u0002\u00ea",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec",
    "\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "A\u0003\u0002\u0002\u0002\u00ee\u00ef\t\t\u0002\u0002\u00efC\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007^\u0002\u0002\u00f1\u00f4\t\n\u0002\u0002",
    "\u00f2\u00f4\u0005F#\u0002\u00f3\u00f0\u0003\u0002\u0002\u0002\u00f3",
    "\u00f2\u0003\u0002\u0002\u0002\u00f4E\u0003\u0002\u0002\u0002\u00f5",
    "\u00f6\u0007^\u0002\u0002\u00f6\u00f7\u0007w\u0002\u0002\u00f7\u00f8",
    "\u0005B!\u0002\u00f8\u00f9\u0005B!\u0002\u00f9\u00fa\u0005B!\u0002\u00fa",
    "\u00fb\u0005B!\u0002\u00fbG\u0003\u0002\u0002\u0002\u0016\u0002\u0003",
    "Oh\u009a\u00a0\u00a5\u00ab\u00ae\u00b3\u00b6\u00c2\u00d4\u00d6\u00dd",
    "\u00df\u00e3\u00e7\u00ec\u00f3\u0006\u0007\u0003\u0002\u0006\u0002\u0002",
    "\b\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SightlyLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SightlyLexer.prototype = Object.create(antlr4.Lexer.prototype);
SightlyLexer.prototype.constructor = SightlyLexer;

Object.defineProperty(SightlyLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

SightlyLexer.EOF = antlr4.Token.EOF;
SightlyLexer.ESC_EXPR = 1;
SightlyLexer.EXPR_START = 2;
SightlyLexer.TEXT_PART = 3;
SightlyLexer.EXPR_END = 4;
SightlyLexer.BOOL_CONSTANT = 5;
SightlyLexer.DOT = 6;
SightlyLexer.LBRACKET = 7;
SightlyLexer.RBRACKET = 8;
SightlyLexer.AND_OP = 9;
SightlyLexer.OR_OP = 10;
SightlyLexer.NOT_OP = 11;
SightlyLexer.COMMA = 12;
SightlyLexer.ARRAY_START = 13;
SightlyLexer.ARRAY_END = 14;
SightlyLexer.ASSIGN = 15;
SightlyLexer.OPTION_SEP = 16;
SightlyLexer.TERNARY_Q_OP = 17;
SightlyLexer.TERNARY_BRANCHES_OP = 18;
SightlyLexer.LT = 19;
SightlyLexer.LEQ = 20;
SightlyLexer.GEQ = 21;
SightlyLexer.GT = 22;
SightlyLexer.EQ = 23;
SightlyLexer.NEQ = 24;
SightlyLexer.ID = 25;
SightlyLexer.INT = 26;
SightlyLexer.FLOAT = 27;
SightlyLexer.COMMENT = 28;
SightlyLexer.WS = 29;
SightlyLexer.STRING = 30;

SightlyLexer.ExpressionMode = 1;

SightlyLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

SightlyLexer.prototype.modeNames = [ "DEFAULT_MODE", "ExpressionMode" ];

SightlyLexer.prototype.literalNames = [ null, null, "'${'", null, "'}'", 
                                        null, "'.'", "'('", "')'", "'&&'", 
                                        "'||'", "'!'", "','", "'['", "']'", 
                                        "'='", "'@'", "'?'", "':'", "'<'", 
                                        "'<='", "'>='", "'>'", "'=='", "'!='" ];

SightlyLexer.prototype.symbolicNames = [ null, "ESC_EXPR", "EXPR_START", 
                                         "TEXT_PART", "EXPR_END", "BOOL_CONSTANT", 
                                         "DOT", "LBRACKET", "RBRACKET", 
                                         "AND_OP", "OR_OP", "NOT_OP", "COMMA", 
                                         "ARRAY_START", "ARRAY_END", "ASSIGN", 
                                         "OPTION_SEP", "TERNARY_Q_OP", "TERNARY_BRANCHES_OP", 
                                         "LT", "LEQ", "GEQ", "GT", "EQ", 
                                         "NEQ", "ID", "INT", "FLOAT", "COMMENT", 
                                         "WS", "STRING" ];

SightlyLexer.prototype.ruleNames = [ "ESC_EXPR", "EXPR_START", "TEXT_PART", 
                                     "EXPR_END", "BOOL_CONSTANT", "DOT", 
                                     "LBRACKET", "RBRACKET", "AND_OP", "OR_OP", 
                                     "NOT_OP", "COMMA", "ARRAY_START", "ARRAY_END", 
                                     "ASSIGN", "OPTION_SEP", "TERNARY_Q_OP", 
                                     "TERNARY_BRANCHES_OP", "LT", "LEQ", 
                                     "GEQ", "GT", "EQ", "NEQ", "ID", "INT", 
                                     "FLOAT", "COMMENT", "WS", "STRING", 
                                     "EXPONENT", "HEX_DIGIT", "ESC_SEQ", 
                                     "UNICODE_ESC" ];

SightlyLexer.prototype.grammarFileName = "SightlyLexer.g4";



exports.SightlyLexer = SightlyLexer;

