<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Week" active>
        <b-tabs content-class="mt-3">
          <b-tab title="Helipad One">
            <FullCalendar
            class='demo-app-calendar'
            ref="fullCalendar"
            defaultView="timeGridWeek"
            :header="{
              left: 'prev,next, today',
              center: 'title',
              right: 'timeGridWeek'
            }"
            :customButtons="{}"
            :plugins="calendarPlugins"
            :events="calendarEvents"
            :editable="true"
            @dateClick="handleDateClick"
            />
          </b-tab>
          <b-tab title="Helipad Two">
          
          </b-tab>
          <b-tab title="Helipad Three">
          
          </b-tab>
          <b-tab title="Helipad Four">
          
          </b-tab>
        </b-tabs>
      </b-tab>
      <b-tab title="Day">
        <FullCalendar
        class='demo-app-day-calendar'
        ref="fullCalendar"
        defaultView="timeGridDay"
        :header="{
          left: 'prev,next, today',
          center: 'title',
          right: 'timeGridDay'
        }"
        :customButtons="{}"
        :plugins="calendarPlugins"
        :events="calendarEvents"
        :editable="true"
        @dateClick="handleDateClick"
        />
        <FullCalendar
        class='demo-app-day-calendar'
        ref="fullCalendar"
        defaultView="timeGridDay"
        :header="{
          left: 'prev,next, today',
          center: 'title',
          right: 'timeGridDay'
        }"
        :customButtons="{}"
        :plugins="calendarPlugins"
        :events="calendarEvents"
        :editable="true"
        @dateClick="handleDateClick"
        />
        <FullCalendar
        class='demo-app-day-calendar'
        ref="fullCalendar"
        defaultView="timeGridDay"
        :header="{
          left: 'prev,next, today',
          center: 'title',
          right: 'timeGridDay'
        }"
        :customButtons="{}"
        :plugins="calendarPlugins"
        :events="calendarEvents"
        :editable="true"
        @dateClick="handleDateClick"
        />
        <FullCalendar
        class='demo-app-day-calendar'
        ref="fullCalendar"
        defaultView="timeGridDay"
        :header="{
          left: 'prev,next, today',
          center: 'title',
          right: 'timeGridDay'
        }"
        :customButtons="{}"
        :plugins="calendarPlugins"
        :events="calendarEvents"
        :editable="true"
        @dateClick="handleDateClick"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

export default {
 components: {
    FullCalendar
  },
  data: function() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin
      ],
      calendarEvents: [
        { title: 'Event Now', start: new Date() }
      ]
    }
  },
  methods: {
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-top {
  margin: 0 0 3em;
}
.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}
.demo-app-day-calendar{
  float: left;
  width: 25%;
  padding: 5px;
}
</style>
