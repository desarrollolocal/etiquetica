require 'rubygems'
require 'jasmine'
require 'rspec/core'
require 'rspec/core/rake_task'
require 'listen'

desc "Run server"

  task :serverup do
    system "rackup -p 3000 &"
    listener = Listen.to('spec/', 'features/') do |modified, added, removed|
      puts "modified absolute path: #{modified}"
      puts "added absolute path: #{added}"
      puts "removed absolute path: #{removed}"
    end
    listener.start
    sleep
  end

  task :serverdown do
    system "pkill -9 -f rackup"
  end

begin
  require 'cucumber'
  require 'cucumber/rake/task'
  desc "Run Acceptance Test"

  Cucumber::Rake::Task.new(:acceptance) do |t|
    t.cucumber_opts = "features"
  end
end



desc "Run all specs in spec directory (excluding plugin specs)"
  RSpec::Core::RakeTask.new(:spec)

desc "default"
  task :default => [:acceptance, "jasmine:ci", :spec]

desc "travis"
  task :travis do
    ["rspec spec", "rake jasmine:ci", "rake acceptance"].each do |cmd|
      puts "Starting to run #{cmd}..."
      system("export DISPLAY=:99.0 && bundle exec #{cmd}")
      raise "#{cmd} failed!" unless $?.exitstatus == 0
    end
  end

load 'jasmine/tasks/jasmine.rake'
