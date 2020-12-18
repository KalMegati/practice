# require 'pry'

def generate(num_rows)
    return [] if num_rows == 0
    pascal = [[1]]
    row = 0
    while row < num_rows-1
        template = pascal[row].map {|a|a}
        template.unshift(0).push(0)
        result = []
        (template.length-1).times do |i|
           result << template[i]+template[i+1]
        end
        pascal << result
        row += 1
    end
    pascal
end

print(generate(3))