function getDate0fMonth(year, month) {
    var dateInstance = new Date(year, month, 0);
    var dateCount = dateInstance.getDate();
    return dateCount;
}

function getDay0fMonthFirstDate(year, month) {
    var dateInstance = new Date(year, month - 1, 1);
    var day = dateInstance.getDay();
    return day;
}

var PREV_TYPE = "PREV";
var CURRENT_TYPE = "CURRENT";
var NEXT_TYPE = "NEXT";

// 创建日期单元格文档片段的方法
function createDateCellFragment(start, end, type) {
    var fragment = document.createDocumentFragment();
    for (var i = start; i < end; i++) {
        var calendarDateElement = document.createElement("div");
        calendarDateElement.classList.add("calendar-date__base");
        calendarDateElement.innerText = i;
        switch (type) {
            case PREV_TYPE:
                calendarDateElement.classList.add("calendar-date_disable");
                break;
            case NEXT_TYPE:
                calendarDateElement.classList.add("calendar-date_disable");
                break;
            default:
                break;

        }
        fragment.appendChild(calendarDateElement);
    }
    return fragment;
}

function createCalendar(year, month) {
    var WEEK_DATE_COUNT = 7;
    var mainFragment = document.createDocumentFragment();
    var mainBody = document.querySelector("calendar-main_body");
    var currentMonthDateCount = getDate0fMonth(year, month);
    var prevMonthDateCount = getDate0fMonth(year, month - 1);
    var dayOfCurrentMonthFirstDate = getDay0fMonthFirstDate(year, month);
    var prevMonthDatePadding = dayOfCurrentMonthFirstDate;
    var nextMonthDatePadding =
        WEEK_DATE_COUNT -
        ((prevMonthDatePadding + currentMonthDateCount) % WEEK_DATE_COUNT);
// 创建1号前 需要补的日期单元格
    var prevMonthDatePaddingFragment = createDateCellFragment(
        prevMonthDateCount - prevMonthDatePadding + 1,
        prevMonthDateCount,
        PREV_TYPE);
    var currentMonthDateFragment = createDateCellFragment(
        currentMonthDateCount,
        CURRENT_TYPE);
    var nextMonthDatePaddingFragment = createDateCellFragment(
        nextMonthDatePadding,
        NEXT_TYPE
    );
    mainFragment.appendChild(prevMonthDatePaddingFragment);
    mainFragment.appendChild(currentMonthDateFragment);
    mainFragment.appendChild(nextMonthDatePaddingFragment);
    mainBody.appendChild(mainFragment);
}
createCalendar(2024,12)