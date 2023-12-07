var currentDate = new Date();
            var dayOfWeek = currentDate.getDay();
            var monthOfYear = currentDate.getMonth();
            var dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
            var dayOfWeekElement = document.getElementById('date');

            dayOfWeekElement.innerHTML = dayNames[dayOfWeek] + ', ' + monthNames[monthOfYear] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();