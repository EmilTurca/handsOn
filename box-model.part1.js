child
Width = 100 
childPadding = 10
childBorder = 1
childMargin = 20

parentWidth = 110

childSize =  childWidth + (childPadding + childBorder + childMargin) * 2
overflow = childSize > parentWidth
overflowbigger = parentWidth - childSize
alert("Horizontal childSize" + childSize + "px")
alert("child overflow?" + overflow)
alert("how many overflow bigger?" + overflowbigger + "px")
