import React from 'react';


export default props => {
    var input = null;
    var hasBindEvent = false;
    const {dispatchAddTodo} = props;
    const handleClick = (e) => {
        var value = input.value;
        if(!value.trim()) {
            console.log('待办事件名不能为空！');
            return false;
        }
        dispatchAddTodo(value);
        input.value = '';
        return false;
    };

    const addEvent = function (node) {
        if(!hasBindEvent) {
            input = node;
            node.onkeyup = function (e) {
                if(e.keyCode === 13) {
                    handleClick();
                }
            };
            hasBindEvent = true;
        }
    };

    return (
        <div className="input-group col-lg-6">
            <input type="text" className="form-control" placeholder="请输入待办事件" ref={addEvent} />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={handleClick}>添加</button>
            </span>
        </div>
    );
};