# React Native FlatList KeyExtractor Performance Issue

This repository demonstrates a common performance issue in React Native's FlatList component when the `keyExtractor` prop is improperly configured.  Using the item value directly as the key, especially with strings, can lead to inefficient rendering and unexpected behavior.

## Problem
The provided `bug.js` file shows an example where the item itself (a string) is used as the key.  When the data changes, even slightly, FlatList may inefficiently re-render many items instead of intelligently identifying which items have changed.